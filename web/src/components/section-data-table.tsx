import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface SectionDataTableProps extends ComponentProps<'div'> {
  data: Array<{ key: string; value: string }>
}

export function SectionDataTable({
  data,
  className,
  ...props
}: SectionDataTableProps) {
  return (
    <div
      className={twMerge(
        'overflow-hidden rounded-lg border border-zinc-700',
        className,
      )}
      {...props}
    >
      <table className="w-full">
        <tbody>
          {data.map((item) => {
            return (
              <tr
                key={item.key}
                className="border-zinc-700 border-b last:border-0"
              >
                <td className="border-zinc-700 border-b bg-zinc-800/50 p-3 font-medium text-sm text-zinc-400">
                  {item.key}
                </td>
                <td className="p-3 font-mono text-sm text-zinc-300">
                  {item.value}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
