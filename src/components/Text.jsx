import { createElement } from "react"
import styles from "@/styles/components/Text.module.scss"

export default function Text({variant, type, content, haschild, children, enableAOS}) {

  const commonProps = {
    className: `${styles[variant]} ${clash.className}`,
  };

  if (haschild) {
    return createElement(
      type,
      commonProps,
      children
    ) 
   }
   else {
    return createElement(
      type,
      {
        ...commonProps,
        dangerouslySetInnerHTML: {
          __html: content,
        },
      }
    ) 
  }
}
