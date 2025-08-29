interface SectionTitleProps {
  title: string
}

export default function SectionTitle({ title }: SectionTitleProps) {
  const [boldText, ...rest] = title.split(' ')
  const normalText = rest.join(' ')

  return (
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 leading-tight">
      {boldText} <span className="font-normal">{normalText}</span>
    </h2>
  )
}
