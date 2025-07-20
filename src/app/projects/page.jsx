import New from '../../components/New';
import WhatsappLottie from '../../components/WhatsappLottie';

export default function ContactPage() {
  return (
    <main style={{
      overflowX: 'hidden',
      maxWidth: '1400px',
      margin: '0 auto',
      width: '100%',
      padding: '0 20px',
      boxSizing: 'border-box'
    }}>
      <WhatsappLottie />
      <New />
    </main>
  );
}
