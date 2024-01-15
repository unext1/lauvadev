import { useFetcher } from '@remix-run/react';
import { Computer, Moon, Sun } from 'lucide-react';
import { $path } from 'remix-routes';

import { Button } from '~/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '~/components/ui/dropdown-menu';
import { useRootData } from '~/hooks/routes-hooks';

const icons = {
  light: <Sun className="h-5 w-5" />,
  dark: <Moon className="h-5 w-5" />,
  system: <Computer className="h-5 w-5" />
} as const;
const themes = Object.keys(icons);
type Theme = (typeof themes)[number];

export const ThemeToggle = () => {
  const data = useRootData();
  const theme = data?.colorScheme ?? 'system';

  const fetcher = useFetcher();

  const updateTheme = (theme: Theme) => {
    fetcher.submit({ theme }, { method: 'POST', action: $path('/api/settings') });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          {icons[theme]}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((key) => (
          <DropdownMenuItem key={key} className="space-x-2" onClick={() => updateTheme(key)} disabled={key === theme}>
            {icons[key]}
            <span className="capitalize">{key}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
