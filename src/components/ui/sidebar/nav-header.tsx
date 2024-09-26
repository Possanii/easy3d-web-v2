import logo from '@/assets/logo-easy.png'

export function NavHeader() {
  return (
    <div className="flex w-full items-center justify-center overflow-hidden px-2 py-1.5 transition-all">
      <img alt="easy3d logo" src={logo} className="" />
    </div>
  )
}
