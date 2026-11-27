
// Topo da lista
export type TabId = 'lista' | 'compra' | 'painel';

// Recebimento de componente
interface TabsNavProps {
  activeTab: TabId;                     // aba aberto no momento
  onTabChange: (tab: TabId) => void;    // função
}

const TABS: { id: TabId; label: string }[] = [
  { id: 'lista', label: 'Lista' },
  { id: 'compra', label: 'Compra' },
  { id: 'painel', label: 'Painel' },
];

export function TabsNav({ activeTab, onTabChange }: TabsNavProps) {
  return (
    <nav aria-label="Navegação principal" className="flex items-end px-3 pt-1 gap-1.5">
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onTabChange(tab.id)}
            className={`flex-1 py-2.5 px-3 text-sm rounded-t-lg transition-colors duration-150 ${
              isActive
                ? 'bg-[#fff9ef] text-[#2d4a22] font-bold'
                : 'bg-black/15 text-[#fff9ef]/80 font-medium hover:bg-black/25 hover:text-[#fff9ef]'
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
}