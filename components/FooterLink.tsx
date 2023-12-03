export interface FooterLinkProps {
  href: string
  content: string
}

export default function FooterLink({ href, content }: FooterLinkProps): JSX.Element {
  return (
    <a
      href={href}
      target="_blank"
      className="block text-brown-50 font-base hover:text-white"
      rel="noreferrer"
    >
      <small className="text-xs leading-loose">
        <span data-lokalise="" data-key="COMMON_FOOTER_LINK_NEWS">
          {content}
        </span>
      </small>
    </a>
  )
}
