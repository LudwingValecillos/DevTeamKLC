import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { sendEmail } from "@/utils/brevoServices.jsx"; // Asegurate de ajustar esta ruta

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      await sendEmail(formData);
      setSuccess("Mensaje enviado correctamente ✅");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setSuccess("Hubo un error al enviar el mensaje ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Burbujas animadas de fondo */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow delay-2000" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-md">
              Contáctanos
            </h1>
            <p className="text-lg text-gray-300">
              Estamos listos para ayudarte a hacer realidad tu proyecto.
              Envíanos un mensaje y nos pondremos en contacto contigo lo antes
              posible.
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Mail,
                title: "Email",
                content: "ludwingvaldev@gmail.com",
                link: "mailto:contacto@devteam.com",
              },
              {
                icon: Phone,
                title: "Teléfono",
                content: "+54 (11) 7368-0952",
                link: "tel:+541173680952",
              },
              {
                icon: MapPin,
                title: "Ubicación",
                content: "Buenos Aires, Argentina",
                link: "https://maps.google.com",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-tr from-[#1e1e2f] to-[#2d2d44] rounded-2xl p-6 text-center shadow-xl border border-white/10 transition-transform transform hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="bg-white/10 rounded-full p-4 w-fit mx-auto mb-4 shadow-md">
                  <item.icon className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="font-semibold text-lg text-white mb-2">
                  {item.title}
                </h3>
                <a
                  href={item.link}
                  className="text-blue-300 hover:text-white transition-colors"
                >
                  {item.content}
                </a>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md rounded-2xl p-10 shadow-2xl border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2 text-white"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#111827] text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2 text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#111827] text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold mb-2 text-white"
                >
                  Teléfono
                </label>
                <input
                  type="text"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#111827] text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
                  placeholder="Ej: +54 911 1234 5678"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2 text-white"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-[#111827] text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
                  placeholder="Cuéntanos más sobre tu proyecto..."
                  required
                ></textarea>
              </div>

              {success && (
                <p
                  className={`text-sm font-medium ${
                    success.includes("✅") ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {success}
                </p>
              )}

              <Button
                size="lg"
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl hover:opacity-90 transition-opacity hover:scale-[1.01]"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Enviar Mensaje"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
