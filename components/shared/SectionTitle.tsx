const SectionTitle = ({ text }: { text: string }) => {
  return (
    <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
      {text}
    </h1>
  );
};

export default SectionTitle;
