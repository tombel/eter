export interface TextModuleProps {
  title: string
  description: string
}

function TextModule({ title, description }: TextModuleProps): JSX.Element {
  return (
    <div className="flex flex-wrap items-center justify-center">
      <h3 className="font-base font-bold text-2xl md:text-4xl	uppercase text-white mb-30 text-center">
        {title}
      </h3>
      <p className="font-base font-semibold text-xl text-white w-full text-center text-justify mb-60">
        {description}
      </p>
    </div>
  )
}

export default TextModule
