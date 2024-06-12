import Link from 'next/link';
import { Button } from '@/src/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from '@/src/components/ui/card';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from '@/src/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/src/components/ui/dropdown-menu';
import { ScrollArea } from '@/src/components/ui/scroll-area';
import {
  GlobeIcon,
  LineChartIcon,
  PieChartIcon,
  BarChartIcon,
  LayersIcon,
  DownloadIcon,
  PlusIcon,
  SettingsIcon,
  MoveHorizontalIcon,
  PieChart
} from 'lucide-react';

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="grid min-h-screen w-full grid-cols-[280px_1fr]">
      <div className="flex flex-col border-r bg-gray-100/40 dark:bg-gray-800/40">
        <div className="flex h-[60px] items-center px-6">
          <Link
            href="#"
            className="flex items-center gap-2 font-semibold"
            prefetch={false}
          >
            <GlobeIcon className="h-6 w-6" />
            <span>Travel Industry</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
              prefetch={false}
            >
              <LineChartIcon className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              <LayersIcon className="h-4 w-4" />
              Markets
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              <PieChartIcon className="h-4 w-4" />
              Analysis
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              <SettingsIcon className="h-4 w-4" />
              Settings
            </Link>
          </nav>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <div className="flex-1">
            <h1 className="font-semibold text-lg">Travel Industry</h1>
          </div>
        </header>
        <main className="flex-1 p-6 md:p-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">TAM</CardTitle>
                <PieChart className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1.5 Trillion</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Total Addressable Market
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">SAM</CardTitle>
                <PieChartIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$750 Billion</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Serviceable Available Market
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">SOM</CardTitle>
                <BarChartIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$300 Billion</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Serviceable Obtainable Market
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Market Growth Rate
                </CardTitle>
                <LineChartIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8.5%</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  CAGR (Compound Annual Growth Rate)
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Market Share
                </CardTitle>
                <PieChartIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15%</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Current Market Share
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Customer Segments
                </CardTitle>
                <LayersIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Major Segments Identified
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6 grid gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Market Analysis Reports
                </CardTitle>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <PlusIcon className="w-4 h-4" />
                  <span className="sr-only">Add Report</span>
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Report Title</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Analyst</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">
                        Market Trends 2023
                      </TableCell>
                      <TableCell>2023-06-12</TableCell>
                      <TableCell>John Doe</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoveHorizontalIcon className="w-4 h-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View</DropdownMenuItem>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Q1 Market Analysis
                      </TableCell>
                      <TableCell>2023-03-31</TableCell>
                      <TableCell>Jane Smith</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoveHorizontalIcon className="w-4 h-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View</DropdownMenuItem>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Emerging Markets
                      </TableCell>
                      <TableCell>2023-01-15</TableCell>
                      <TableCell>Michael Brown</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoveHorizontalIcon className="w-4 h-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View</DropdownMenuItem>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Recent Activities
                </CardTitle>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <DownloadIcon className="w-4 h-4" />
                  <span className="sr-only">Download Activities</span>
                </Button>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-72 w-full rounded-md border">
                  <div className="p-4 text-sm">
                    <p className="mt-4 leading-7">
                      [2024-06-12 12:34:56] [INFO] Market report published
                    </p>
                    <p className="mt-4 leading-7">
                      [2024-06-12 12:35:01] [WARN] Analyst John Doe submitted a
                      new analysis
                    </p>
                    <p className="mt-4 leading-7">
                      [2024-06-12 12:36:15] [ERROR] Data fetch from source XYZ
                      failed
                    </p>
                    <p className="mt-4 leading-7">
                      [2024-06-12 12:37:22] [INFO] Analyst Jane Smith updated
                      market trends
                    </p>
                    <p className="mt-4 leading-7">
                      [2024-06-12 12:38:45] [DEBUG] Data import initiated
                    </p>
                    <p className="mt-4 leading-7">
                      [2024-06-12 12:39:30] [INFO] Data import completed
                    </p>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
