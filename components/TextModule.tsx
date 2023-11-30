export interface TextModuleProps {
  title: string
  description: string
  description2?: string
}

function TextModule({ title, description, description2 }: TextModuleProps): JSX.Element {
  return (
    <div className="flex flex-wrap items-center justify-center">
      <h3 className="font-base font-bold text-2xl md:text-4xl	uppercase text-white mb-30 text-center">
        {title}
      </h3>
      <p className="font-base font-semibold text-sm lg:text-xl text-white w-full text-center text-justify mb-60">
        {description}
      </p>
      <p className="font-base font-semibold text-sm lg:text-xl text-white w-full text-center text-justify -mt-40 mb-60">
        {description2}
      </p>
    </div>
  )
}

export default TextModule
