import { Badge } from './ui/badge'

interface WebhookDetailHeaderProps {
  method: string
  pathname: string
  ip: string
  createdAt: Date
}

export function WebhookDetailHeader({
  method,
  pathname,
  ip,
  createdAt,
}: WebhookDetailHeaderProps) {
  return (
    <div className="space-y-4 border-zinc-700 border-b p-6">
      <div className="flex items-center gap-3">
        <Badge>{method}</Badge>
        <span className="font-medium text-lg text-zinc-300">{pathname}</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 text-sm text-zinc-400">
          <span>From IP</span>
          <span className="font-mono text-xs underline underline-offset-4">
            {ip}
          </span>
        </div>
        <span className="h-4 w-px bg-zinc-600" />
        <div className="flex items-center gap-1 text-xs text-zinc-400">
          <span>at</span>
          <span>{createdAt.toLocaleString('en-US') || ' '}</span>
        </div>
      </div>
    </div>
  )
}
