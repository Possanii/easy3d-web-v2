import { useNavigate } from 'react-router-dom'

import Logo from '@/assets/logo-easy-subtitle.webp'
import { Base } from '@/components/typography/text/base'
import { TitleXl } from '@/components/typography/title/title-xl'
import { Button } from '@/components/ui/button'

export function Page404() {
  const navigate = useNavigate()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-muted p-10 lg:p-0 xl:flex-row">
      <img
        className="mx-auto h-auto max-w-full sm:max-w-lg xl:m-0"
        src={Logo}
        alt="Easy3D Logo"
      />
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto max-w-screen-sm text-center">
            <TitleXl className="mb-4 text-7xl font-extrabold tracking-tight text-easy3d-primary lg:text-9xl">
              404
            </TitleXl>
            <Base className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
              Something's missing.
            </Base>
            <Base className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.{' '}
            </Base>
            <Button
              onClick={() => navigate(-1)}
              className="my-4 inline-flex rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white"
            >
              Back to Homepage
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
