import re
for num in range(1, 13):
    # Read the file
    with open(f'app/lib/Aeneid_Latin/Aeneid_{num}.txt', 'r') as f:
        lines = f.readlines()

    # remove the first 2 and last 2 lines
    lines = lines[2:-2]

    # Remove line numbers and empty lines
    cleaned_lines = []
    for line in lines:
        line = line.strip()  # Remove leading and trailing whitespace
        if line:  # Skip empty lines
            line = re.sub(r'\d+', '', line)  # Remove all numbers
            cleaned_lines.append(line + '\n')  # Add the cleaned line back to the list

    # Write the cleaned text to a new file
    with open(f'app/lib/Aeneid_Latin/Aeneid_Latin_1{num}.txt', 'w') as f:
        f.writelines(cleaned_lines)