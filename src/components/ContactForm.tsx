import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Check, Loader2 } from 'lucide-react';

const ContactForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación del formulario
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Información incompleta",
        description: "Por favor completá todos los campos obligatorios.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    // Simulación de envío de formulario
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast({
        title: "Mensaje enviado",
        description: "Te responderemos lo antes posible.",
      });

      // Reiniciar formulario luego de unos segundos
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre <span className="text-red-500">*</span></Label>
          <Input
            id="name"
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            disabled={isLoading || isSubmitted}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Correo electrónico <span className="text-red-500">*</span></Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="tu.correo@ejemplo.com"
            value={formData.email}
            onChange={handleChange}
            disabled={isLoading || isSubmitted}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Empresa</Label>
        <Input
          id="company"
          name="company"
          placeholder="Nombre de tu empresa (opcional)"
          value={formData.company}
          onChange={handleChange}
          disabled={isLoading || isSubmitted}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Mensaje <span className="text-red-500">*</span></Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Contanos sobre tu proyecto o consulta"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          disabled={isLoading || isSubmitted}
          required
        />
      </div>

      <Button 
        type="submit" 
        className="w-full" 
        disabled={isLoading || isSubmitted}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : isSubmitted ? (
          <>
            <Check className="mr-2 h-4 w-4" />
            Mensaje enviado
          </>
        ) : (
          'Enviar mensaje'
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
