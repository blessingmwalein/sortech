interface SectionTitleProps {
  title: string
}

export default function SectionTitle({ title }: SectionTitleProps) {
  const [boldText, ...rest] = title.split(' ')
  const normalText = rest.join(' ')

  return (
    <h2 className="text-3xl font-bold mb-2">
      {boldText} <span className="font-normal">{normalText}</span>
    </h2>
  )
}
