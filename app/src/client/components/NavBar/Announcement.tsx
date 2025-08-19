const ANNOUNCEMENT_URL = 'https://github.com/wasp-lang/open-saas-railway?tab=readme-ov-file#open-saas-x-railway-template--';

export function Announcement() {
  return (
    <div className='relative flex justify-center items-center gap-3 p-3 w-full bg-gradient-to-r from-accent to-secondary text-primary-foreground text-center tracking-wide font-medium'>
      <a
        href={ANNOUNCEMENT_URL}
        target='_blank'
        rel='noopener noreferrer'
        className='hidden lg:block cursor-pointer hover:opacity-90 hover:drop-shadow transition-opacity'
      >
        Open SaaS x Railway Deployed 🎉
      </a>
      <div className='hidden lg:block self-stretch w-0.5 bg-primary-foreground/20'></div>
      <a
        href={ANNOUNCEMENT_URL}
        target='_blank'
        rel='noopener noreferrer'
        className='hidden lg:block cursor-pointer rounded-full bg-background/20 px-3 py-1 hover:bg-background/30 transition-colors'
      >
        Start Building & Learn More 🚀 →
      </a>
      <a
        href={ANNOUNCEMENT_URL}
        target='_blank'
        rel='noopener noreferrer'
        className='lg:hidden cursor-pointer rounded-full bg-background/20 px-2.5 py-1 text-xs hover:bg-background/30 transition-colors'
      >
        ⭐️ Star the Our Repo and Support Open-Source! ⭐️
      </a>
    </div>
  );
}
