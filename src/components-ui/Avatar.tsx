import React from "react";

interface AvatarProps {
  src?: string;
  alt: string;
  size?: 'small' | 'medium' | 'large';
}

const Avatar = ({ src, alt, size = 'medium' }: AvatarProps) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
  };

  return (
    <img
      src={src || 'https://via.placeholder.com/150'}
      alt={alt}
      className={`rounded-full ${sizeClasses[size]} object-cover`}
    />
  );
};

export default Avatar;
