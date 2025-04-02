function Heading({text}: {text: string}) {
  return (
    <h1 className='text-2xl font-semibold text-gray-600 mb-14 self-start whitespace-nowrap'>
      {text}
    </h1>
  );
}

export default Heading;
