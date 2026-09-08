import { Terminal, Layers3, Eye } from 'lucide-react'
import { type ProofArtifact } from '@/lib/portfolio-data'

export function ArtifactIcon({ kind }: { kind: ProofArtifact['kind'] }) {
  return kind === 'terminal' ? <Terminal size={15} /> : kind === 'architecture' ? <Layers3 size={15} /> : <Eye size={15} />
}
