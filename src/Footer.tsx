const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='text-center text-sm text-muted-foreground p-10 mt-10'>
      <p>&copy; {currentYear} Arvin Buid. All rights reserved.</p>
    </div>
  );
};

export default Footer;
