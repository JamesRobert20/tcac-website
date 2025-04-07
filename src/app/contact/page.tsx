import { Metadata } from 'next';
import Content from './Content';

export const metadata: Metadata = {
    title: 'Contact Us | Tanzanian Community Association of Calgary',
    description: 'Get in touch with the Tanzanian Community Association of Calgary (TCAC). We\'d love to hear from you!',
};

export default function ContactPage() {
    return <Content />
} 