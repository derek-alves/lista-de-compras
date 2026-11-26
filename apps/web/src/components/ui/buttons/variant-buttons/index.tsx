import type { ButtonHTMLAttributes, HtmlHTMLAttributes } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'light' | 'clear-link' | 'danger-outline';
    size?: 'sm' | 'md' | 'lg'
}

