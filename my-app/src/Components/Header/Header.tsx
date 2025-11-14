import { ReactNode } from "react";
import Logo from "./Logo/Logo";

interface HeaderProps {
    className?: string,
    children?: ReactNode,
}

const Header: React.FC<HeaderProps> = ({
    className,
    children,
}) => {
    return (
        <header className={className}>
            <Logo />
            {children}
        </header>
    )
}

export default Header;