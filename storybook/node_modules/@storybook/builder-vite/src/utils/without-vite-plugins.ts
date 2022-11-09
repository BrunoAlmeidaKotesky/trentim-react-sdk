import type { PluginOption } from 'vite';

// recursively remove all plugins with the given names
export const withoutVitePlugins = (
  plugins: PluginOption[] = [],
  namesToRemove: string[]
): PluginOption[] =>
  plugins.map((plugin) => {
    if (Array.isArray(plugin)) {
      return withoutVitePlugins(plugin, namesToRemove);
    }
    if (plugin && 'name' in plugin && namesToRemove.includes(plugin.name)) {
      return false;
    }
    return plugin;
  });
