export function HyperLink({ text, href}) {
    return (
        <a className="hover:italic hover:text-[lightseagreen]" href={href} target='_blank'>{text}</a>
    )
}