import { Badge } from './ui/badge'

export function WebhookDetailHeader() {
  return (
    <div className="space-y-4 border-zinc-700 border-b p-6">
      <div className="flex items-center gap-3">
        <Badge>POST</Badge>
        <span className="font-medium text-lg text-zinc-300">/video/status</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 text-sm text-zinc-400">
          <span>From IP</span>
          <span className="font-mono text-xs underline underline-offset-4">
            112.292.128.23
          </span>
        </div>
        <span className="h-4 w-px bg-zinc-600" />
        <div className="flex items-center gap-1 text-sm text-zinc-400">
          <span>at</span>
          <span>April 18th, 14pm</span>
        </div>
      </div>
    </div>
  )
}
