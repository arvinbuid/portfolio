function Heading({ text }: { text: string }) {
  return (
    <h1 className='text-2xl font-semibold text-gray-600 mb-4 self-start whitespace-nowrap dark:text-gray-200'>
      {text}
    </h1>
  );
}

export default Heading;
