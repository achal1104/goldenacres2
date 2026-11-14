import { Link } from 'react-router-dom';
import { LEGAL } from '../data';

export default function Legal({ kind }) {
  const { title, body } = LEGAL[kind];
  return (
    <section className="section bg-ivory legal">
      <div className="wrap legal__in">
        <div className="orn" aria-hidden="true"><i /></div>
        <h1>{title}</h1>
        {body.map((p) => <p className="lead" key={p}>{p}</p>)}
        <Link className="btn btn--primary" to={{ pathname: '/', hash: '#contact' }}>Request the full document</Link>
      </div>
    </section>
  );
}
