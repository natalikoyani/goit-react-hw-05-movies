import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      Sorry, this page doesn`t exist! Please click <Link to="/">here</Link> to
      return to Homepage
    </div>
  );
}
