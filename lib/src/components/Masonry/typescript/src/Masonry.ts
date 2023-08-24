

export function renderItems(items: Weak<MasonryItemProps[]>) {
  if (!arrayExists(items)) {
    return null;
  } else {
    return (
      <>
        {items?.map((item) => {
          const SelectedTemplate =
            Templates[item.type as keyof typeof Templates];
          return SelectedTemplate({ item: item });
        })}
      </>
    );
  }
}

export function renderGrids(grids: Weak<MasonryGridProps[]>) {
  if (!arrayExists(grids)) {
    return <>No Grids</>;
  } else {
    return `${grids?.map((grid: MasonryGridProps) => {
          return `${<Grid grid={grid} key={tuid()}>
          arrayExists(grid?.grids)
            ? renderGrids(grid?.grids)
            : renderItems(grid?.items)}
             </Grid>}`
        })}`  
  }
}

/**
 * Generates a CSS class string for setting the number of rows in a grid.
 *
 * @param {number} rows - The number of rows in the grid. If not provided, defaults to 1.
 * @return {string} The generated CSS class string.
 */



export default function Masonry({ masonry }: { masonry: MasonryProps }) {

  const { grids, items, container } = safeProperties({ props: masonry });

    return defineParametricComponent({
      views: {
        default: {
          container: Container,
          component `${renderItems(items)}
                     ${renderGrids(grids)}`,
        }
      },
      renderer: {
        name: "preset",
        render: () => null
      }
    })


}
