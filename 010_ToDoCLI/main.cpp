#include <iostream>
#include <vector>

struct Todo {
  std::string task, state, priority;
  int index;
};

std::vector<Todo> v;

void showBlankLine() { std::cout << '\n'; }

void showIntroduction() {
  int i;
  for (i = 0; i < 10; ++i) {
    std::cout << '.';
  }

  std::cout << " Welcome To The C++ ToDo CLI App! ";

  for (i = 0; i < 10; ++i) {
    std::cout << '.';
  }

  for (i = 0; i < 2; ++i) {
    showBlankLine();
  }
}

void showList() {
  int i;
  for (i = 0; i < v.size(); ++i, std::cout << '\n') {
    std::cout << v[i].task << ' ' << v[i].index << ' ' << v[i].state << ' '
              << v[i].priority;
  }
}

void printOptions() {
  std::cout << "Sort the List (0)" << ' ' << "Change the List (1)" << ' '
            << "Delete from List (2)" << ' ' << "Add to list (3)\n";
}

void readTask() {
  v.resize(50);
  std::string s1, s2, s3;
  int i = v.size();

  std::cout << "Task name?:\n";
  std::cin >> s1;

  std::cout << "Task state? (0 - Nothing, 1 - Working, 2 - Finished):\n";
  int option;
  std::cin >> option;
  switch (option) {
    case (0):
      s2 = "Nothing";
    case (1):
      s2 = "Working";
    case (2):
      s2 = "Finished";
  }

  std::cout << "What is the priority of the task? (0 - Low, 1 - Medium, 2 - "
               "High):\n";
  std::cin >> option;
  switch (option) {
    case (0):
      s3 = "Low";
    case (1):
      s3 = "Medium";
    case (2):
      s3 = "High";
  }

  v.emplace_back(s1, v.size(), s2, s3);
  // // v.task.push_back(s1);
  // v[i].task = s1;
  // v[i].index = i;
  // v[i].state = s2;
  // v[i].priority = s3;
}

void showActiveTasks() {
  showIntroduction();
  if (v.size() == 0) {
    std::cout
        << "Your List is Empty, would you like to add some new tasks? (y/n)\n";
    std::string s;
    std::cin >> s;
    if (s == "y") {
      readTask();
    } else {
      return;
    }
  }

  else {
    showList();
  }

  std::cout << "What would you like to do?\n";
  printOptions();

  showActiveTasks();
}

int main() { showActiveTasks(); }