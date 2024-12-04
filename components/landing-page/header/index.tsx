
import { ReactNode, forwardRef, ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui';

import { cn } from '@/utils/cn';
import MobileMenu from './mobile-menu';
import { PearHeroLogo } from '@/assets/icons';
import DownloadButton from './download-button';
import AuthButton from './auth-button';
import DarkModeToggle from './darkmode-toggle';

const NavItem = ({
  href,
  target = '_self',
  children,
}: {
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  children: ReactNode;
}) => (
  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()} href={href} target={target}>
    <Link href={href}>{children}</Link>
  </NavigationMenuLink>
);

const DropdownNavItem = ({ trigger, children }: { trigger: string; children: ReactNode }) => (
  <NavigationMenuItem>
    <NavigationMenuTrigger>{trigger}</NavigationMenuTrigger>
    <NavigationMenuContent>{children}</NavigationMenuContent>
  </NavigationMenuItem>
);

const ListItem = forwardRef<
  HTMLAnchorElement,
  ComponentPropsWithoutRef<'a'> & { title: string; href: string }
>(({ className, title, children, href, ...props }, ref) => (
  <li className="px-1">
    <NavigationMenuLink asChild>
      <Link
        ref={ref}
        href={href}
        className={cn(
          'hover:bg-secondary-300/10 focus:bg-secondary-300/10 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-accent-foreground focus:text-accent-foreground',
          className,
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-gray-600/90 dark:text-gray-500">
          {children}
        </p>
      </Link>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = 'ListItem';

export default async function Header() {
  // TODO getUserInfo & sign out
  const user = null
  // const supabase = createClient();
  // const { data: { user }, error } = await supabase.auth.getUser();

  const handleSignOut = async () => {
    "use server";
    // const supabase = createClient();
    // await supabase.auth.signOut();
    // redirect("/");
  };


  return (
    <header className="fixed left-0 right-0 top-0 z-50 p-4 transition-all duration-300 ease-in-out">
      <div className="mx-auto max-w-[1070px]">
        <nav
          className="rounded-2xl border-[1.5px] border-gray-200 bg-background px-2 transition-all duration-300 ease-in-out dark:border-gray-50"
          aria-label="Main navigation"
        >
          <div className="flex h-12 items-center justify-between">
            <div className="flex items-center">
              <Link
                href="/"
                className="flex flex-shrink-0 items-center"
                aria-label="PearAI Home"
              >
                <PearHeroLogo className="mb-1 h-7" />
                <div className="ml-1 text-2xl font-bold">PearAI</div>
              </Link>
              <nav className="ml-4 hidden md:block" aria-label="Main menu">
                <NavigationMenu>
                  <NavigationMenuList className="text-black/60 dark:text-gray-500">
                    <DropdownNavItem trigger="Resources">
                      <ul className="grid w-[400px] gap-3 bg-background p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        <ListItem href="/about" title="About" className="h-full">
                          Learn more about PearAI
                        </ListItem>
                        <ListItem href="/blog" title="Blog" className="h-full">
                          Read insights on PearAI&apos;s development by our contributors
                        </ListItem>
                        <ListItem href="/faq" title="FAQ" className="h-full">
                          Frequently asked questions about PearAI
                        </ListItem>
                        <ListItem href="/changelog" title="Changelog" className="h-full">
                          See what&apos;s new in PearAI
                        </ListItem>
                      </ul>
                    </DropdownNavItem>
                    <NavItem href="/pricing">Pricing</NavItem>
                    <NavItem href="/docs">Documentation</NavItem>
                    <NavItem href="https://github.com/trypear/pearai-master" target="_blank" >
                      GitHub
                    </NavItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </nav>
            </div>
            <div className="hidden items-center space-x-4 lg:flex">
              <DownloadButton user={user} />
              <AuthButton user={user} handleSignOut={handleSignOut} />
              <DarkModeToggle />
            </div>
            <div className="lg:hidden">
              <MobileMenu user={user} handleSignOut={handleSignOut} />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
