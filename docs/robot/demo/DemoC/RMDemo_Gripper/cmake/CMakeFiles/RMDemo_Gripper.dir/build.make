# CMAKE generated file: DO NOT EDIT!
# Generated by "MinGW Makefiles" Generator, CMake Version 3.29

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:

#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:

# Disable VCS-based implicit rules.
% : %,v

# Disable VCS-based implicit rules.
% : RCS/%

# Disable VCS-based implicit rules.
% : RCS/%,v

# Disable VCS-based implicit rules.
% : SCCS/s.%

# Disable VCS-based implicit rules.
% : s.%

.SUFFIXES: .hpux_make_needs_suffix_list

# Command-line flag to silence nested $(MAKE).
$(VERBOSE)MAKESILENT = -s

#Suppress display of executed commands.
$(VERBOSE).SILENT:

# A target that is always out of date.
cmake_force:
.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

SHELL = cmd.exe

# The CMake executable.
CMAKE_COMMAND = "C:\Program Files\JetBrains\CLion 242.19890.26\bin\cmake\win\x64\bin\cmake.exe"

# The command to remove a file.
RM = "C:\Program Files\JetBrains\CLion 242.19890.26\bin\cmake\win\x64\bin\cmake.exe" -E rm -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = C:\Users\dell\715\example_c\RMDemo_Gripper

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = C:\Users\dell\715\example_c\RMDemo_Gripper\cmake

# Include any dependencies generated for this target.
include CMakeFiles/RMDemo_Gripper.dir/depend.make
# Include any dependencies generated by the compiler for this target.
include CMakeFiles/RMDemo_Gripper.dir/compiler_depend.make

# Include the progress variables for this target.
include CMakeFiles/RMDemo_Gripper.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/RMDemo_Gripper.dir/flags.make

CMakeFiles/RMDemo_Gripper.dir/src/main.c.obj: CMakeFiles/RMDemo_Gripper.dir/flags.make
CMakeFiles/RMDemo_Gripper.dir/src/main.c.obj: CMakeFiles/RMDemo_Gripper.dir/includes_C.rsp
CMakeFiles/RMDemo_Gripper.dir/src/main.c.obj: C:/Users/dell/715/example_c/RMDemo_Gripper/src/main.c
CMakeFiles/RMDemo_Gripper.dir/src/main.c.obj: CMakeFiles/RMDemo_Gripper.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir=C:\Users\dell\715\example_c\RMDemo_Gripper\cmake\CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building C object CMakeFiles/RMDemo_Gripper.dir/src/main.c.obj"
	C:\PROGRA~1\JETBRA~1\CLION2~1.26\bin\mingw\bin\gcc.exe $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -MD -MT CMakeFiles/RMDemo_Gripper.dir/src/main.c.obj -MF CMakeFiles\RMDemo_Gripper.dir\src\main.c.obj.d -o CMakeFiles\RMDemo_Gripper.dir\src\main.c.obj -c C:\Users\dell\715\example_c\RMDemo_Gripper\src\main.c

CMakeFiles/RMDemo_Gripper.dir/src/main.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing C source to CMakeFiles/RMDemo_Gripper.dir/src/main.c.i"
	C:\PROGRA~1\JETBRA~1\CLION2~1.26\bin\mingw\bin\gcc.exe $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E C:\Users\dell\715\example_c\RMDemo_Gripper\src\main.c > CMakeFiles\RMDemo_Gripper.dir\src\main.c.i

CMakeFiles/RMDemo_Gripper.dir/src/main.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling C source to assembly CMakeFiles/RMDemo_Gripper.dir/src/main.c.s"
	C:\PROGRA~1\JETBRA~1\CLION2~1.26\bin\mingw\bin\gcc.exe $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S C:\Users\dell\715\example_c\RMDemo_Gripper\src\main.c -o CMakeFiles\RMDemo_Gripper.dir\src\main.c.s

# Object files for target RMDemo_Gripper
RMDemo_Gripper_OBJECTS = \
"CMakeFiles/RMDemo_Gripper.dir/src/main.c.obj"

# External object files for target RMDemo_Gripper
RMDemo_Gripper_EXTERNAL_OBJECTS =

RMDemo_Gripper.exe: CMakeFiles/RMDemo_Gripper.dir/src/main.c.obj
RMDemo_Gripper.exe: CMakeFiles/RMDemo_Gripper.dir/build.make
RMDemo_Gripper.exe: C:/Users/dell/715/example_c/RMDemo_Gripper/Robotic_Arm/lib/api_c.lib
RMDemo_Gripper.exe: CMakeFiles/RMDemo_Gripper.dir/linkLibs.rsp
RMDemo_Gripper.exe: CMakeFiles/RMDemo_Gripper.dir/objects1.rsp
RMDemo_Gripper.exe: CMakeFiles/RMDemo_Gripper.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --bold --progress-dir=C:\Users\dell\715\example_c\RMDemo_Gripper\cmake\CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Linking C executable RMDemo_Gripper.exe"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles\RMDemo_Gripper.dir\link.txt --verbose=$(VERBOSE)
	"C:\Program Files\JetBrains\CLion 242.19890.26\bin\cmake\win\x64\bin\cmake.exe" -E copy_if_different C:/Users/dell/715/example_c/RMDemo_Gripper/Robotic_Arm/lib/api_c.dll C:/Users/dell/715/example_c/RMDemo_Gripper/cmake

# Rule to build all files generated by this target.
CMakeFiles/RMDemo_Gripper.dir/build: RMDemo_Gripper.exe
.PHONY : CMakeFiles/RMDemo_Gripper.dir/build

CMakeFiles/RMDemo_Gripper.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles\RMDemo_Gripper.dir\cmake_clean.cmake
.PHONY : CMakeFiles/RMDemo_Gripper.dir/clean

CMakeFiles/RMDemo_Gripper.dir/depend:
	$(CMAKE_COMMAND) -E cmake_depends "MinGW Makefiles" C:\Users\dell\715\example_c\RMDemo_Gripper C:\Users\dell\715\example_c\RMDemo_Gripper C:\Users\dell\715\example_c\RMDemo_Gripper\cmake C:\Users\dell\715\example_c\RMDemo_Gripper\cmake C:\Users\dell\715\example_c\RMDemo_Gripper\cmake\CMakeFiles\RMDemo_Gripper.dir\DependInfo.cmake "--color=$(COLOR)"
.PHONY : CMakeFiles/RMDemo_Gripper.dir/depend

