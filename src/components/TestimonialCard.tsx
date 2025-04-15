
import React from 'react';

interface TestimonialProps {
  quote: string;
  name: string;
  company: string;
  image?: string;
}

const TestimonialCard = ({ quote, name, company, image }: TestimonialProps) => {
  return (
    <div className="glass-card rounded-xl p-6 h-full">
      <div className="mb-6">
        <svg 
          className="w-8 h-8 text-primary/40" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M9.17 6C7.4 7.5 5.5 10.4 5.5 14.5C5.5 15.93 6.06 17.59 7.6 18.5C8.2 18.93 9.05 19.1 9.86 18.93C11.6 18.55 12.5 16.76 12.5 15C12.5 12.95 10.83 11.41 9 11.45C9.3 10.73 11.12 7.28 14.67 6.1L13.56 4C11.5 4.9 9.17 6 9.17 6ZM19.17 6C17.4 7.5 15.5 10.4 15.5 14.5C15.5 15.93 16.06 17.59 17.6 18.5C18.2 18.93 19.05 19.1 19.86 18.93C21.6 18.55 22.5 16.76 22.5 15C22.5 12.95 20.83 11.41 19 11.45C19.3 10.73 21.12 7.28 24.67 6.1L23.56 4C21.5 4.9 19.17 6 19.17 6Z" 
            fill="currentColor"
          />
        </svg>
      </div>
      
      <p className="text-foreground italic mb-6">{quote}</p>
      
      <div className="flex items-center">
        {image && (
          <div className="mr-4">
            <img 
              src={image} 
              alt={name} 
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
        )}
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-muted-foreground text-sm">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
