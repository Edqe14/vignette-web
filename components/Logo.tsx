import logo from 'public/images/logo.png'
import Image from 'next/image'
import logoDark from 'public/images/logo-dark.png'

import logosquare from 'public/images/logo-square.png'
import logosquareDark from 'public/images/logo-square-dark.png'

const Logo = ({
  className,
  forceLight,
  width = 141,
  height = 33,
}: {
  className?: string
  width?: number
  height?: number
  forceLight?: boolean
}) => (
  <>
    {forceLight ? (
      <div className={`${className} flex dark:hidden`}>
        <Image
          src={logoDark}
          priority
          width={width}
          height={height}
          layout="fixed"
          alt=""
        />
      </div>
    ) : (
      <>
        <div className={`${className} flex dark:hidden`}>
          <Image
            src={logo}
            priority
            width={width}
            height={height}
            layout="fixed"
            alt=""
          />
        </div>
        <div className={`${className} hidden dark:flex`}>
          <Image
            src={logoDark}
            priority
            width={width}
            height={height}
            layout="fixed"
            alt=""
          />
        </div>
      </>
    )}
  </>
)
const LogoSquare: React.FC<{ size: number }> = ({ size }) => (
  <>
    <div className="flex dark:hidden">
      <Image
        src={logosquare}
        width={size}
        height={size}
        layout="fixed"
        alt=""
      />
    </div>
    <div className="hidden dark:flex">
      <Image
        src={logosquareDark}
        width={size}
        height={size}
        layout="fixed"
        alt=""
      />
    </div>
  </>
)
export { Logo, LogoSquare }
