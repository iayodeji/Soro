"use client"

import { useState } from "react"

export default function InviteCTA({ email }: { email?: string }) {
  const [inviteState, setInviteState] = useState<'idle' | 'sharing' | 'copied'>('idle')

  async function handleInvite() {
    const configured = process.env.NEXT_PUBLIC_APP_URL ?? ''
    const origin = configured || (typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000')
    const ref = email ? encodeURIComponent(email.trim().toLowerCase()) : ''
    const inviteUrl = `${origin}/?ref=${ref}`

    try {
      setInviteState('sharing')
      if (navigator && (navigator as any).share) {
        await (navigator as any).share({
          title: 'Join Soro',
          text: `Join Soro waitlist and increase my priority: ${inviteUrl}`,
          url: inviteUrl,
        })
        setInviteState('copied')
        return
      }

      await navigator.clipboard.writeText(inviteUrl)
      setInviteState('copied')
    } catch (e) {
      try {
        await navigator.clipboard.writeText(inviteUrl)
        setInviteState('copied')
      } catch {
        setInviteState('idle')
      }
    }
  }

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={handleInvite}
        disabled={inviteState !== 'idle'}
        className="inline-flex w-full items-center justify-center rounded-lg bg-terracotta px-6 py-3.5 text-sm font-semibold text-terracotta-foreground transition-colors hover:bg-terracotta/90 disabled:opacity-60"
      >
        {inviteState === 'sharing' ? 'Sharing…' : inviteState === 'copied' ? 'Link copied! Share it' : 'Invite friends — increase your priority'}
      </button>
      <p className="mt-2 text-xs text-muted-foreground">The more people you invite, the higher your priority on our waitlist.</p>
    </div>
  )
}
