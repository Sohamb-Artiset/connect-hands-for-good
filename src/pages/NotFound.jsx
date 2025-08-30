import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <Button variant="default" size="lg">
          Return Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;