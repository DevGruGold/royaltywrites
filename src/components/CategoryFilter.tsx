
import { useState } from "react";
import { Check, ChevronDown, X } from "lucide-react";
import { Button } from "./ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { Badge } from "./ui/badge";

interface Category {
  value: string;
  label: string;
}

const categories: Category[] = [
  {
    value: "political",
    label: "Political",
  },
  {
    value: "parody",
    label: "Parody",
  },
  {
    value: "absurdist",
    label: "Absurdist",
  },
  {
    value: "musical",
    label: "Musical",
  },
  {
    value: "character",
    label: "Character-driven",
  },
  {
    value: "topical",
    label: "Topical",
  },
  {
    value: "slapstick",
    label: "Slapstick",
  },
  {
    value: "satire",
    label: "Satire",
  },
];

interface CategoryFilterProps {
  onChange?: (selectedCategories: string[]) => void;
}

const CategoryFilter = ({ onChange }: CategoryFilterProps) => {
  const [open, setOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleSelect = (currentValue: string) => {
    let newSelectedCategories: string[];
    
    if (selectedCategories.includes(currentValue)) {
      newSelectedCategories = selectedCategories.filter(
        (value) => value !== currentValue
      );
    } else {
      newSelectedCategories = [...selectedCategories, currentValue];
    }
    
    setSelectedCategories(newSelectedCategories);
    onChange?.(newSelectedCategories);
    setOpen(false);
  };

  const handleClearFilter = (e: React.MouseEvent, value: string) => {
    e.stopPropagation();
    const newSelectedCategories = selectedCategories.filter(
      (category) => category !== value
    );
    setSelectedCategories(newSelectedCategories);
    onChange?.(newSelectedCategories);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="justify-between">
              Filter by Category
              <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0" align="start">
            <Command>
              <CommandInput placeholder="Search categories..." />
              <CommandList>
                <CommandEmpty>No categories found.</CommandEmpty>
                <CommandGroup>
                  {categories.map((category) => (
                    <CommandItem
                      key={category.value}
                      onSelect={() => handleSelect(category.value)}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`flex h-4 w-4 items-center justify-center rounded-sm border ${
                          selectedCategories.includes(category.value) 
                            ? "border-primary bg-primary text-primary-foreground" 
                            : "border-muted-foreground"
                        }`}>
                          {selectedCategories.includes(category.value) && (
                            <Check className="h-3 w-3" />
                          )}
                        </div>
                        <span>{category.label}</span>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      
      {selectedCategories.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {selectedCategories.map((value) => {
            const category = categories.find((c) => c.value === value);
            return (
              <Badge key={value} variant="secondary" className="pl-2">
                {category?.label}
                <button
                  className="ml-1 rounded-full hover:bg-muted-foreground/20 inline-flex h-4 w-4 items-center justify-center"
                  onClick={(e) => handleClearFilter(e, value)}
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            );
          })}
          {selectedCategories.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              className="h-7 px-2 text-xs"
              onClick={() => {
                setSelectedCategories([]);
                onChange?.([]);
              }}
            >
              Clear all
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;
