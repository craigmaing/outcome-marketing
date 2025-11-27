import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export default function CTASection({
  title,
  description,
  buttonText,
  buttonHref,
}: CTASectionProps) {
  return (
    <section className="bg-primary text-secondary py-16 md:py-20">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
          <p className="text-xl text-gray-300 mb-8">{description}</p>
          <Button href={buttonHref} variant="secondary">
            {buttonText}
          </Button>
        </div>
      </Container>
    </section>
  );
}
