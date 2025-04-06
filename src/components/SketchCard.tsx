
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ChevronUp, 
  MessageSquare, 
  Star, 
  Share2, 
  Bookmark,
  Tag
} from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "./ui/tooltip";

interface SketchCardProps {
  id: string;
  title: string;
  description: string;
  upvotes: number;
  comments: number;
  author: {
    name: string;
    avatar: string;
  };
  createdAt: Date;
  tags: string[];
}

const SketchCard = ({
  id,
  title,
  description,
  upvotes,
  comments,
  author,
  createdAt,
  tags
}: SketchCardProps) => {
  const [upvoteCount, setUpvoteCount] = useState(upvotes);
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleUpvote = () => {
    if (isUpvoted) {
      setUpvoteCount(prev => prev - 1);
    } else {
      setUpvoteCount(prev => prev + 1);
    }
    setIsUpvoted(!isUpvoted);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  const truncateDescription = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <Card className="sketch-card animate-enter">
      <CardHeader className="pb-2 pt-4">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <Link to={`/sketch/${id}`} className="text-xl font-bold hover:text-primary transition-colors">
              {title}
            </Link>
            <div className="flex flex-wrap gap-1">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  <Tag className="mr-1 h-3 w-3" />
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className={`rounded-full transition-colors ${isUpvoted ? 'text-primary' : ''}`}
            onClick={handleUpvote}
          >
            <ChevronUp className="h-5 w-5" />
            <span className="ml-1 text-sm font-bold">{upvoteCount}</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-muted-foreground">
          {truncateDescription(description)}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="text-xs text-muted-foreground">
            {author.name} · {formatDate(createdAt)}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MessageSquare className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{comments} comments</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Share2 className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Share sketch</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8"
                  onClick={() => setIsSaved(!isSaved)}
                >
                  <Bookmark className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{isSaved ? 'Saved' : 'Save for later'}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SketchCard;
