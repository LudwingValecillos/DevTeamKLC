import React, { useState } from "react";
import { Github, Linkedin, Globe } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
  github?: string;
  linkedin?: string;
  website?: string;
}

const TeamMemberCard = ({
  name,
  role,
  bio,
  image,
  skills,
  github,
  linkedin,
  website,
}: TeamMemberProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLines = 4;
  const shouldShowButton = bio.split("\n").length > maxLines;

  return (
    <div className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-square relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-primary font-medium mb-3">{role}</p>
        <div className="relative">
          <p
            className={`text-muted-foreground text-sm mb-4 ${
              !isExpanded ? "line-clamp-4" : ""
            }`}
          >
            {bio}
          </p>
          {shouldShowButton && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary text-sm font-medium hover:underline"
            >
              {isExpanded ? "Ver menos" : "Ver más"}
            </button>
          )}
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={`${name}'s GitHub`}
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={`${name}'s LinkedIn`}
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={`${name}'s Website`}
            >
              <Globe className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
