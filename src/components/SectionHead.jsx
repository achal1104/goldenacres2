import Reveal from './Reveal';

export default function SectionHead({ title, children, center = false, id }) {
  return (
    <Reveal className={`head ${center ? 'center' : ''}`}>
      <div className="orn" aria-hidden="true"><i /></div>
      <h2 id={id}>{title}</h2>
      {children && <p className="lead">{children}</p>}
    </Reveal>
  );
}
