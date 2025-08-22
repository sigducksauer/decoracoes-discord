import { Icons } from "@/components/icons";
import Giscus from "@giscus/react";

export default function Discussion() {
  return (
    <main className="flex flex-col h-screen text-white">
      <div className="flex items-center gap-2 bg-base-lower p-4 border-b border-border-faint text-icon-tertiary">
        <Icons.forum size="24px" />
        <p className="font-semibold text-white">Discussões</p>
      </div>
      <div className="overflow-auto discord-scrollbar grow">
        <Giscus
          id="comments"
          repo="sigducksauer/decoracoes-discord"
          repoId="R_kgDOPh7ttw"
          mapping="number"
          term="4"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="preferred_color_scheme"
          lang="pt"
          loading="lazy"
        />
      </div>
    </main>
  );
}
