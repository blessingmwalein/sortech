interface PageTitleProps {
  title: string
}

export default function PageTitle({ title }: PageTitleProps) {
  const [boldText, ...rest] = title.split(' ')
  const normalText = rest.join(' ')

  return (
    <h1 className="text-5xl font-bold flex items-center ">
      {title} <span className="ml-2 ">↘</span>
    </h1>
  )
}
