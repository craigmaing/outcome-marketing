import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

const values = [
  {
    title: 'Results-Focused',
    description: 'We measure success by your business outcomes, not vanity metrics.',
  },
  {
    title: 'Cornwall Expertise',
    description: 'Deep understanding of the local market and business landscape.',
  },
  {
    title: 'Transparent Reporting',
    description: 'Clear communication and detailed reports on all projects.',
  },
  {
    title: 'Long-Term Partnership',
    description: 'We build lasting relationships focused on sustainable growth.',
  },
];

export default function ValueProp() {
  return (
    <Section background="gray">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Outcome?</h2>
            <p className="text-xl text-gray-600">
              Dedicated to delivering measurable results for Cornwall businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
