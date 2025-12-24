import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Link, useLocation, useNavigate } from '@tanstack/react-router'
import { formatDistanceToNow } from 'date-fns'
import { Trash2Icon } from 'lucide-react'
import { Checkbox } from './ui/checkbox'
import { IconButton } from './ui/icon-button'

interface WebhookListItemProps {
  webhook: {
    id: string
    method: string
    pathname: string
    createdAt: Date
  }
  onWebhookChecked: (webhookId: string) => void
  isWebhookChecked: boolean
}

export function WebhooksListItem({
  webhook,
  onWebhookChecked,
  isWebhookChecked,
}: WebhookListItemProps) {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const location = useLocation() // Usamos useLocation para checar a URL atual sem quebrar o componente

  const { mutate: deleteWebhook } = useMutation({
    mutationFn: async (id: string) => {
      await fetch(`http://localhost:3333/api/webhooks/${id}`, {
        method: 'DELETE',
      })
    },
    onSuccess: async (_data, variables) => {
      // 1. Limpa o cache da lista
      queryClient.invalidateQueries({
        queryKey: ['webhooks'],
      })

      // 2. Remover o cache específico do item deletado
      queryClient.removeQueries({
        queryKey: ['webhooks', variables],
      })

      // 3. LOGICA DE LIMPEZA DA URL:
      // Verificamos se a URL atual contém o ID do webhook que acabamos de deletar
      const isViewingDeletedWebhook = location.pathname.includes(variables)

      if (isViewingDeletedWebhook) {
        // Se eu estou vendo o item que deletei, volto para a raiz
        await navigate({
          to: '/',
          replace: true,
        })
      }
    },
  })

  return (
    <div className="group rounded-lg transition-colors duration-150 hover:bg-zinc-700/30">
      <div className="flex items-start gap-3 px-4 py-2.5">
        <Checkbox
          onCheckedChange={() => onWebhookChecked(webhook.id)}
          checked={isWebhookChecked}
        />

        <Link
          to="/webhooks/$id"
          params={{ id: webhook.id }}
          className="flex w-full min-w-0 flex-1 items-start gap-3"
        >
          <span className="w-12 shrink-0 text-right font-mono font-semibold text-xs text-zinc-300">
            {webhook.method}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate font-mono text-xs text-zinc-200 leading-tight">
              {webhook.pathname}
            </p>
            <p className="mt-1 font-medium text-xs text-zinc-500">
              {formatDistanceToNow(webhook.createdAt, { addSuffix: true })}
            </p>
          </div>
        </Link>

        <IconButton
          icon={<Trash2Icon className="size=3.5 text-zinc-400" />}
          className="opacity-0 transition-opacity group-hover:opacity-100"
          onClick={() => deleteWebhook(webhook.id)}
        />
      </div>
    </div>
  )
}
