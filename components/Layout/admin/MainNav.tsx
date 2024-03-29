import { cn } from "@/lib/utils";
import { clsx } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const router = useRouter();
  return (
    <nav
      className={clsx("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/admin/orders"
        className={cn(
          "text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
          router.pathname === "/admin/orders" && "text-primary underline"
        )}
      >
        Orders
      </Link>
      <Link
        href="/admin/customers"
        className={cn(
          "text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
          router.pathname === "/admin/customers" && "text-primary underline"
        )}
      >
        Customers
      </Link>
      <Link
        href="/admin/retailers"
        className={cn(
          "text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
          router.pathname === "/admin/retailers" && "text-primary underline"
        )}
      >
        Retailers
      </Link>
    </nav>
  );
}
