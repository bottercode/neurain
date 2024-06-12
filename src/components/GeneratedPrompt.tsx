import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/src/components/ui/card';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext
} from '@/src/components/ui/pagination';
import { Button } from '@/src/components/ui/button';

export const GeneratedPrompt = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:mx-20 xl:mx-32 pt-16 pb-2">
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Recent Ideas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Scatter Plot</CardTitle>
                <CardDescription>
                  A scatter plot showing total page views for the last 6 months.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Prompt
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Stacked Bar Chart</CardTitle>
                <CardDescription>
                  A stacked bar chart showing total pages views for the last 6
                  months.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Prompt
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Circle Heatmap</CardTitle>
                <CardDescription>
                  A heatmap showing numerical data using circle cells.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Prompt
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Curved Gradient Line Chart</CardTitle>
                <CardDescription>
                  A gradient-filled curved line/area chart.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Prompt
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Horizontal Carousel</CardTitle>
                <CardDescription>
                  A horizontal carousel with 3 cards and next/previous buttons.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Prompt
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Vertical Carousel</CardTitle>
                <CardDescription>
                  A vertical carousel with 3 cards and next/previous buttons.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Prompt
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};
