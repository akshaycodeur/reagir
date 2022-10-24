import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return ( 
        <div className="404page">
            <h2>This is sparta! Inn't?!</h2>
        <p>Go back!</p>
        <Link to="/">Back to the homepage...</Link>
        </div>
     );
}
 
export default NotFoundPage;