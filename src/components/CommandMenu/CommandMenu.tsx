'use client';

import { Command } from 'cmdk';
import { useMemo, useState } from 'react';

interface MenuOption {
    id: string;
    label: string;
}

interface CommandMenuProps {
    options: Array<MenuOption>;
}

const CommandMenu: React.FC<CommandMenuProps> = ({ options }) => {
    const [query, setQuery] = useState('');
    const filteredResults = useMemo(
        () =>
            query.length === 0
                ? options
                : options.filter((option) =>
                      option.label.toLowerCase().includes(query.toLowerCase())
                  ),
        [query, options]
    );

    return (
        <Command label="Command Menu" shouldFilter={false}>
            <Command.Input value={query} onValueChange={setQuery} />
            <Command.List>
                <Command.Empty>No results found.</Command.Empty>
                <Command.Group heading="Letters">
                    {filteredResults.map((result) => (
                        <Command.Item key={result.id}>
                            {result.label}
                        </Command.Item>
                    ))}
                    <Command.Separator
                        alwaysRender={filteredResults.length > 0}
                    />
                    {/* <Command.Item value={query}>Add “{query}”</Command.Item> */}
                </Command.Group>
            </Command.List>
        </Command>
    );
};

export default CommandMenu;
