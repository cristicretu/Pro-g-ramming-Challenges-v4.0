#include <iostream>
#include <vector>

class Todo {
 public:
  struct App {
    std::string task;
  };

  int index = 0;
  std::vector<App> list;

  void ReadInput();
};

void Todo::ReadInput() {
  std::cout << "What's the name of the task you want to add?";
  std::cin >> list[index].task;

  std::cout << list[index].task;
  index++;
  std::cout << '\n' << index;
}